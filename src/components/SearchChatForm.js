import React from 'react';
import PropTypes from 'prop-types';

class SearchChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            error: ''
        };
    }

    validate() {
        this.setState({
            error: ''
        });
        if (this.state.title.length === 0) {
            this.setState({
                error: 'Введите название чата'
            });
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            this.props.handleSubmit({ title: this.state.title });
            this.setState({ title: '' });
        }
    }

    render() {
        const { title, error } = this.state;

        return (
            <>
                <h4>Search chat</h4>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>{error && <span style={{ color: '#fdfcfc' }}>{error}</span>}</div>
                    <div>
                        <label>
                            Название чата:
                            <input
                                value={title}
                                onChange={(event) => this.setState({ title: event.target.value })}
                            />
                        </label>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </>
        );
    }
}

SearchChatForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SearchChatForm;
