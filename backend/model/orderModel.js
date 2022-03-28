import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },

    postalCode: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  orderItems: [
    {
      names: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    },
  ],

  paymentInfo: {
    id: {
      type: String,
    },
    status: {
      type: String,
    },
  },

  paidAt: {
    type: Date,
  },

  itemPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },

  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },

  orderStatus: {
    type: String,
    required: true,
    default: 'processing',
  },

  deliveredAt: {
    type: Date,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
