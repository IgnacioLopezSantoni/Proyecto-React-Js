import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import IconButton from "@mui/material/IconButton";

const CartWidget = () => {
    return (
        <IconButton
            color="inherit"
            aria-label="cart"
            edge="start"
            onClick={null}
            sx={{ mr: 2 }}
        >
            <LocalGroceryStoreIcon />
        </IconButton>
    )
}

export default CartWidget