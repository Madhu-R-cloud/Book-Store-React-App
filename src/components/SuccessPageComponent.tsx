// import OrderSuccessGif from "../assets/palaces_order.gif";
import CelebrationGif from '../assets/diwali-sparkles-stars.gif'
import { Link } from "react-router-dom";
function SuccessPageComponent() {
  return (
    <div className="flex flex-col items-center mb-[30px] gap-4">
      <div>
        <img
          src={CelebrationGif}
          alt="OrderSuccessImage"
          width="200px"
          style={{ marginTop: "20px" }}
        />
        <p
          style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}
        >
          Order Placed Successfully!
        </p>
      </div>
      <p className="w-[355px] text-center">
        <span className="font-semibold">Hurray!!!</span> your order is confirmed
        the order id is #123456 save the order id for further communication..
      </p>
      <table className="w-[780px]">
        <thead>
          <tr className="bg-[#DCDCDC] h-[42px]">
            <th className="w-[200px] font-normal">Email us</th>
            <th className="w-[200px] font-normal">Contact us</th>
            <th className="font-normal">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center border-2">admin@bookstore.com</td>
            <td className="text-center border-2">+91 8163475881</td>
            <td className="border-2 px-2">
              42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
              Kumarakom restaurant, HSR Layout, Bangalore 560034
            </td>
          </tr>
        </tbody>
      </table>
      <Link
        to={"/book"}
        className="bg-[#3371B5] text-white w-[200px] h-[35px] text-center pt-1"
      >
        Continue shopping
      </Link>
    </div>
  );
}
export default SuccessPageComponent;
