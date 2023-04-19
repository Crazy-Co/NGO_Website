import React, { useState } from "react";

export const PaymentForm = () => {
    const [isPayment, setPayment] = useState("");
    const [isName, setName] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isContact, setContact] = useState("");
    
    function clearForm() {
        setName("");
        setEmail("");
        setContact("");
        setPayment("");
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (isPayment === "") {
            alert("Please submit a valid amount");
        } else {
            // alert(isPayment)
            var options = {
                key: "rzp_test_mKLLw3J9jmAAqr",
                key_secret: "3d3joyGepoDaD8auCaBw3xaZ",
                amount: isPayment * 100,
                curreny: "INR",
                name: "CARE & FEED",
                description: "for testing",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                // check if its necessary
                prefill: {
                    name: isName,
                    email: isEmail,
                    contact: isContact,
                },
                notes: {
                    address: "Razorpay Corporate office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            var pay = new window.Razorpay(options);
            pay.open();
            clearForm();
            
        }
    }

    return (
        <div className="payment_box">
            <h1>Donator Details</h1>
            <form action="/NGO_Website/" method="POST" onSubmit={handleSubmit} className="payment-form">
                <div className="inputBox">
                    <input
                        type="text"
                        name="customerName"
                        value={isName}
                        onChange={(e) => setName(e.target.value)} required
                    />
                    <span>Name</span>
                </div>
                <div className="inputBox">
                    <input
                        type="email"
                        name="email"
                        value={isEmail}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                    <span>Email ID</span>
                </div>
                <div className="inputBox">
                    <input
                        type="tel"
                        name="contact"
                        value={isContact}
                        onChange={(e) => setContact(e.target.value)} required
                    />
                    <span>Contact No.</span>
                </div>
                <div className="inputBox">
                    <input
                        type="number"
                        name="donation"
                        value={isPayment}
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <span>Donation Amount</span>
                </div>
                <div className="inputBox">
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                    <div>
                        <input type="reset" value="Reset" onClick={clearForm}/>
                    </div>
                </div>
            </form>
        </div>
    );
};
