import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataCart, showModalsCart } from "../../store/pageSlice";
import _ from "lodash";

const ModalsCart = () => {
  let dispatch = useDispatch();
  let { cart } = useSelector((state) => state?.page?.modals);
  let { data: ModalsData } = useSelector((state) => state?.page?.modals);

  const payMovies = () => {
    dispatch(setDataCart([]));
    dispatch(showModalsCart(false));
    alert("Pembayaran Berhasil, Terimakasih sudah berbelanja film di situs kami");
  };

  const removeMovies = (value) => {
    let data = [...ModalsData];
    _.pull(data, value);
    dispatch(setDataCart(data));
  };

  const totalBayar = useMemo(() => {
    if (ModalsData?.length !== 0 && ModalsData?.length > 1) {
        let total = ModalsData?.reduce((prev,curr) => {
            return prev.Price + curr.Price
        })
        return total
    } else if (ModalsData?.length === 1) {
        return ModalsData[0].Price
    }
  },[ModalsData])


  return (
    <>
      {cart && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Latar belakang semi-transparan */}
            <div className="fixed inset-0 bg-black opacity-50"></div>
            {/* Konten modal */}
            <div className="bg-white rounded-lg p-8 z-10">
              <div className="mt-4">
                {/* Isi modal */}
                <h1 className="text-xl font-bold">
                  Berikut adalah list movie yang akan anda beli :
                  {/* Apakah anda yakin ingin menambahkan{" "}
                  {confirmation?.data?.Title} ke keranjang? */}
                </h1>
                {ModalsData?.length !== 0 ? (
                  <>
                    {ModalsData?.map((el, i) => {
                      return (
                        <div className="flex justify-between">
                          <div className="flex gap-5 py-4">
                            {i + 1}.{" "}
                            <img src={el?.Poster} width={80} height={80} />
                            <div className="flex flex-col gap-3">
                              <p>{el?.Title}</p>
                              <p>${el?.Price}</p>
                            </div>
                          </div>
                          <div
                            onClick={() => removeMovies(el)}
                            className="flex items-center cursor-pointer bg-red-500 hover:bg-opacity-80 h-fit self-center p-3 rounded text-white"
                          >
                            Hapus
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  "Tidak ada Film yang akan di beli"
                )}
                {ModalsData?.length !== 0 && (
                  <h1 className="text-xl">
                    Apakah anda yakin untuk membayar filmnya?
                  </h1>
                )}
                <div className="flex gap-4 justify-center mt-8">
                  <button
                    onClick={() => dispatch(showModalsCart(false))}
                    className="bg-red-500 text-white hover:bg-opacity-80 p-4 rounded w-32"
                  >
                    {ModalsData?.length !== 0 ? "Cancel" : "Close"}
                  </button>
                  {ModalsData?.length !== 0 && (
                    <button
                      onClick={() => payMovies()}
                      className="bg-green-500 text-white hover:bg-opacity-80 p-4 rounded w-32"
                    >
                      Bayar {totalBayar}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalsCart;
