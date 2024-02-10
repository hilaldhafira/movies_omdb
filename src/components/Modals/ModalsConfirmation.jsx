import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataCart, showModalsConfirmation } from "../../store/pageSlice";

const ModalsConfirmation = () => {
  let dispatch = useDispatch();
  let {confirmation} = useSelector((state) => state?.page?.modals);
  let { data:ModalsData} = useSelector((state) => state?.page?.modals);

  const saveTempData = () => {
    let findIndex = ModalsData?.findIndex((el) => el.imdbID === confirmation?.data.imdbID)
    if (findIndex !== -1) {
        alert('Data sudah ditambahkan, tidak bisa menambahkan data yang sama')
        return
    }
    dispatch(setDataCart([...ModalsData,confirmation?.data]))
    dispatch(showModalsConfirmation({show: false, data:{}}))    
  }
  return (
    <>
    {confirmation?.show && 
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Latar belakang semi-transparan */}
        <div className="fixed inset-0 bg-black opacity-50"></div>
        {/* Konten modal */}
        <div className="bg-white rounded-lg p-8 z-10">
          <div className="mt-4">
            {/* Isi modal */}
            <h1 className="text-xl font-bold">Apakah anda yakin ingin menambahkan {confirmation?.data?.Title} ke keranjang?</h1>
            
            <div className="flex gap-4 justify-center mt-8">
                <button onClick={()=>dispatch(showModalsConfirmation({show:false}))} className="bg-red-500 text-white hover:bg-opacity-80 p-4 rounded w-32">
                    Cancel
                </button>
                <button onClick={()=>saveTempData()} className="bg-green-500 text-white hover:bg-opacity-80 p-4 rounded w-32">
                    Yes
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default ModalsConfirmation;
