import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";  // adjust path to match your firebase setup
import { onAuthStateChanged } from "firebase/auth";

const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [user, setUser] = useState(null);

  // Watch user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  // Fetch watchlist from Firestore
  useEffect(() => {
    const fetchWatchlist = async () => {
      if (user) {
        const docRef = doc(db, "watchlists", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWatchList(docSnap.data().movies || []);
        } else {
          await setDoc(docRef, { movies: [] });
          setWatchList([]);
        }
      }
    };

    fetchWatchlist();
  }, [user]);

  // Add movie to watchlist
  const addToList = async (movie) => {
    if (!user) return;
    const newList = [...watchList, movie];
    setWatchList(newList);
    await setDoc(doc(db, "watchlists", user.uid), {
      movies: newList,
    });
  };

  // Remove movie
  const removeFromList = async (id) => {
    console.log("removing ...",id)
    if (!user) return;
    const newList = watchList.filter((movie) => movie.id !== Number(id));
    setWatchList(newList);
    await updateDoc(doc(db, "watchlists", user.uid), {
      movies: newList,
    });
  };

  return (
    <WatchListContext.Provider value={{ watchList, addToList, removeFromList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => useContext(WatchListContext);
