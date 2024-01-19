import SideBar from "../../components/sideBar";
import Header from "../../components/header";
import dummyData from "../dummyData.json";


export default function BlackList() {
  return (
    <>
      <div className="WatchList h-full w-full flex">
        <SideBar />
        <div className="bg-neutral-200 text-black h-full w-4/5">
          <Header add={true} del={false} />

          <div>
            <table className="w-full">
              <thead className="w-full h-16 bg-neutral-200 border-t-2 border-b-2 border-black">
                <tr>
                  <th>Sr.no</th>
                  <th>Wallet Adress</th>
                  <th>Coin</th>
                  <th>Last Transfer</th>
                  <th>Balance</th>
                  <th>Transaction Value</th>
                  <th>Category</th>
                </tr>
              </thead>

              <tbody className="text-center ">
                {dummyData.dummyData.map((item) => (
                  <tr key={item.AlertName}>
                    <td>{item.AlertName}</td>
                    <td>{item.Transaction_amt}</td>
                    <td>{item.INR_$}</td>
                    <td>{item.TimeStamp}</td>
                    <td>{item.Category}</td>
                    <td>{item.Wallet}</td>
                    <td>{item.Transaction_Id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}
