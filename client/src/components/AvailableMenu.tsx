
import type { MenuItem } from "@/types/restaurantType";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";

const AvailableMenu = ({ menus }: { menus: MenuItem[] }) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        {menus.map((menu: MenuItem) => (
          <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
            <img src={menu.image} alt="" className="w-full h-40 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {menu.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{menu.description}</p>
              <h3 className="text-lg font-semibold mt-4">
                Price: <span className="text-[#D19254]">₹{menu.price}</span>
              </h3>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                onClick={() => {
                  addToCart(menu);
                  navigate("/cart");
                }}
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableMenu;
// // import { MenuItem } from "@/types/restaurantType";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardFooter } from "./ui/card";
// // import { useCartStore } from "@/store/useCartStore";
// // import { useNavigate } from "react-router-dom";

// const AvailableMenu = () => {
// //   const { addToCart } = useCartStore();
// //   const navigate = useNavigate();
//   return (
//     <div className="md:p-4">
//       <h1 className="text-xl md:text-2xl font-extrabold mb-6">
//         Available Menus
//       </h1>
//       <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        
//           <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
//             <img src= "https://www.bing.com/images/search?view=detailV2&ccid=IhKFHDnr&id=3679BC0E0480443A7F87EE1E8048C35F60A7B115&thid=OIP.IhKFHDnrMQbtlMAK5YTB_gHaE8&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fthumbnails%2f034%2f304%2f730%2fsmall_2x%2ftwo-plates-of-pasta-and-a-bowl-of-salad-on-a-table-ai-generated-free-photo.jpg&exph=700&expw=1050&q=restaurant+image&FORM=IRPRST&ck=9E553CAD6B8CDE3A709BB906654B6347&selectedIndex=29&itb=0"
//  alt="" className="w-full h-40 object-cover" />
//             <CardContent className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//                 Biryani
//               </h2>
//               <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
//               <h3 className="text-lg font-semibold mt-4">
//                 Price: <span className="text-[#D19254]">₹80</span>
//               </h3>
//             </CardContent>
//             <CardFooter className="p-4">
//               <Button
//                 // onClick={() => {
//                 //   addToCart(menu);
//                 //   navigate("/cart");
//                 // }}
//                 className="w-full bg-orange hover:bg-hoverOrange"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
        
//       </div>
//     </div>
//   );
// };

// export default AvailableMenu;