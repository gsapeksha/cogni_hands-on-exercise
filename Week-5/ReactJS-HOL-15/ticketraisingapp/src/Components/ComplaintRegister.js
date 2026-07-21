import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor() {
        super();

        this.state = {
            ename: "",
            complaint: "",
            referenceId: Math.floor(Math.random() * 100000)
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {

        event.preventDefault();

        const msg =
            "Thanks " +
            this.state.ename +
            "\nYour Complaint was Submitted.\nTransaction ID is: " +
            this.state.referenceId;

        alert(msg);

        this.setState({
            ename: "",
            complaint: "",
            referenceId: Math.floor(Math.random() * 100000)
        });
    };

    render() {

        return (

            <div style={{ textAlign: "center", marginTop: "50px" }}>

                <h1 style={{ color: "red" }}>
                    Register your complaints here!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <table
                        style={{
                            margin: "auto"
                        }}
                    >

                        <tbody>

                            <tr>
                                <td>Name:</td>

                                <td>

                                    <input
                                        type="text"
                                        name="ename"
                                        value={this.state.ename}
                                        onChange={this.handleChange}
                                        required
                                    />

                                </td>
                            </tr>

                            <tr>
                                <td>Complaint:</td>

                                <td>

                                    <textarea
                                        name="complaint"
                                        value={this.state.complaint}
                                        onChange={this.handleChange}
                                        required
                                    />

                                </td>
                            </tr>

                            <tr>

                                <td colSpan="2" align="center">

                                    <button type="submit">
                                        Submit
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>

        );
    }
}

export default ComplaintRegister;