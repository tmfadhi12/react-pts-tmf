import React from "react";
import axios from "axios";

const API = () => {
    let [quran,setQuran] = React.useState("")

    const getAlquran = async() => {
        const url = `https://al-quran-8d642.firebaseio.com/data.json?print=pretty`
        try {
            let response = await axios.get(url)
            console.log(response.data)
            setQuran(response.data)
        } catch (e) {
            
        }
    }
    

    return (
            <div>
                <button onClick={getAlquran} className="btn btn-sm btn-primary">Get Data</button>
                <table className="table table-bordered">
                    <thead>
                        <th>Nama Surat</th>
                        <th>Asma</th>
                        <th>Ayat</th>
                        <th>Nomor</th>
                        <th>Tipe</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{quran.nama}</td>
                            <td>{quran.asma}</td>
                            <td>{quran.ayat}</td>
                            <td>{quran.nomor}</td>
                            <td>{quran.tipe}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default API