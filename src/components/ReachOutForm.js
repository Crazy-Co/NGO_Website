export default function ReachOutForm() {
    return (
        <div>
            <form>
                <label for="name">Name: </label>
                <input
                    type="text"
                    name="name"
                />

                <label for="address">Address: </label>
                <input
                    type= "text"
                    name="address"
                />

                <label for="contact">Contact No: </label>
                <input
                    type='tel'
                    name="contact"
                />

                <label for="help">How can we help you today? </label>
                <input
                    type="text"
                    name="help"
                />

                <p>Any prefered time to reach out: </p>
                <label for="morning">Morning: 7am - 11am</label>
                <input
                    type= 'radio'
                    name="morning"
                    value= 'Morning: 7am - 11am'
                />
                <label for="afternoon">Afternoon: 1pm - 4pm</label>
                <input
                    type= 'radio'
                    name="afternoon"
                    value= 'Afternoon: 1pm - 4pm'
                />
                <label for="evening">Evening: 5pm - 8pm</label>
                <input
                    type= 'radio'
                    name="evening"
                    value= 'Evening: 5pm - 8pm'
                />
            </form>
        </div>
    )
}