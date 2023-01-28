import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import Checkout from "../Checkout";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const { cart } = useSelector(state => state)
  return (
    <>
      <header>
        <Link to='/'>Our Store</Link>
        <Link to='/checkout'>Cart ({cart.length})</Link>
        {/* <Link to='/checkout'>Cart ({cart.length})</Link> */}
      </header>
    </>
  );
};

// const Header = () => {
//   return (
//     <>
//       <AppBar color="grey" position="static">
//         <h1 data-testid="header-h1">Store</h1>
//         {/* <Link to="/checkout" > */}
//           <IconButton aria-label="cart">
//             <StyledBadge badgeContent={4} color="secondary">
//               <ShoppingCartSharpIcon />
//             </StyledBadge>
//           </IconButton>
//           {/* < inCartCounter />  */}
//         {/* </Link> */}
//       </AppBar>
//     </>
//   );
// };

export default Header;
