export const borrowBook = async(useId : string, bookid:string):Promise<void> => {
  try{
    const bookRef = firestore.collection('books').doc(bookid);
    const bookSnapshot = await.bookref.get();
    if(bookSnapshot.exists && bookSnapshot.data()?.isBorrowed){
      throw new Error('this boook is alresdy borrowed by some one else')
    }
    await bookRef.update({isBorrowed:true,borrowedBy:useRouteId, borrowedAt:newDate()});

    console.log(`User ${userId} borrowed from book ${bookId}  ` );


  }catch(error){
    console.error('Error borrowing book', error);
    throw error;
  }
};