import React from 'react';




class AddContact extends React.Component {
    
    state ={
        name: "",
        email: "",
    };
    
    add = (e) => {
        e.preventDefault();
        if (this.state.name.trim() === "" || this.state.email.trim() === "") {
            alert("All fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
        this.props.handleNavigation(); 
      
    }

    render() {
        return (
            <div className='ui celled list'>
                <form className='ui form' onSubmit={this.add}>
                    <h2 style={{ marginTop: '2em' }}>Add Contact</h2>
                    <div className='field'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
