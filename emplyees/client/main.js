import React, {PropTypes} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

const PROPERTY_TYPES = {};
const DEFAULT_PROPS = {};

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let style = classNames(this.props.className, {});

        return (
            <div className={style}>
                App Employees
            </div>
        );
    }
}

App.propTypes = PROPERTY_TYPES;
App.defaultProps = DEFAULT_PROPS;


Meteor.startup(() => {
    ReactDOM.render(<App />,document.getElementById('app'));
});
