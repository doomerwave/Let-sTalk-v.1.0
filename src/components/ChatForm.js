import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

class ChatForm extends React.Component {
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
                <h4>Создание/редактирование чата</h4>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div>{error && <span style={{ color: '#fdfcfd' }}>{error}</span>}</div>
                    <div>
                        <label>
                            Название чата:
                            <Input
                                placeholder="Placeholder"
                                inputProps={{ 'aria-label': 'description' }}
                                value={title}
                                onChange={event => this.setState({ title: event.target.value })}
                            />
                        </label>
                    </div>
                    <Button variant="contained" color="primary" type="submit">
                        Сохранить
                    </Button>
                </form>
            </>
        );
    }
}

ChatForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default ChatForm;
