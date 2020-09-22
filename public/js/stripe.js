/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51HTm7DGwrsdzgwQBiuIaPDk6jppjAfcKCEkFlzanF24gm035ooM6LwAJ1WNO02xWpIv1CRlNF48T2xK9oUIubDEc006wCviTRM');

export const bookTour = async (tourId) => {
    try {
        // 1. Get checkout session from API
        const session = await axios(
            `/api/v1/bookings/checkout-session/${tourId}`
            );

        // 2. Create checkout form + charge credit card
            await stripe.redirectToCheckout({
                sessionId: session.data.session.id
            });
    } catch (err) {
        console.log(err);
        showAlert('error', err)
    }
}