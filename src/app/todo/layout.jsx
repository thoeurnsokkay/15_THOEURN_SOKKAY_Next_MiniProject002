// export const metadata = {
//   title: {
//     template: "%s | Monster",
//     default: "Todo List | Monster",
//   },
//   description: "Homework 006 - Next.js",
// };

// export default function AuthenticationLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="text-charcoal">{children}</body>
//     </html>
//   );
// }

import "../globals.css";
import CardComponent from "@/components/card";
import { Button } from "@/components/ui/button";
// import { SelectContent } from "@radix-ui/react-select";

// import Logo from "@/components/logo";
import Logo from "@/components/logo";
export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        {/* <div className="container text-center py-20 mx-auto grid-cols-2  bg-red-300">
          <Logo />
        </div>
        <div className="grid-cols-10 bg-blue-300 grid ">
          <CardComponent/>
          <Button/>
          {/* <SelectContent/> */}
        {/* </div>  */}

        {children}
      </body>
    </html>
  );
}
