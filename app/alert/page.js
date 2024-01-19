import SideBar from "../components/sideBar";
import Header from "../components/header";
import dummyData from "../dummyData.json";


export default function Alert() {
  return (
    <>
      <div className="WatchList h-full w-full flex">
        <SideBar />
        <div className="bg-neutral-200 text-black h-full w-4/5">
          <Header add={false} del={false}  />
     
          <div className="pt-4">
            <table className="w-full">
              <thead className="w-full h-16 bg-neutral-200 border-t-2 border-b-2 border-black">
                <tr>
                  <th>AlertName</th>
                  <th>Transaction_amt</th>
                  <th>INR($=83)</th>
                  <th>TimeStamp</th>
                  <th>Category</th>
                  <th>Wallet</th>
                  <th>Transaction_Id</th>
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
