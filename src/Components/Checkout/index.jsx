import { Group } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./styles.scss";
import Paper from "@mui/material/Paper";

const Checkout = () => {
  return (
    <>
      <Paper className="paper-form" elevation={3}>

      <h1>Order Surmmary</h1>
      <Card>
        <span>Items in cart</span>
        <h1>Total:</h1>
      </Card>
      <div className="fillout-form">
      <div className="contact-info">
        <TextField id="outlined-basic" label="Billing Address" variant="standard" />
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <TextField id="outlined-basic" label="City" variant="outlined" />
        <TextField id="outlined-basic" label="State" variant="outlined" />
        <TextField id="outlined-basic" label="Zip" variant="outlined" />
      </div>
      <div className="creditCard-info">
        <TextField id="outlined-basic" label="Payment details" variant="standard" />
        <TextField id="outlined-basic" label="Credit Card #" variant="outlined" />
        <TextField id="outlined-basic" label="Expiration" variant="outlined" />
        <TextField id="outlined-basic" label="CVV" variant="outlined" />
      </div>
      </div>
      <Button position="center" className="checkout-button" color="primary">Place Your Order</Button>

      {/* </Paper> */}
      </Paper>
    </>
  );
};

export default Checkout;
