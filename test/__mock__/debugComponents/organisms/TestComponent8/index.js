/* eslint-disable class-methods-use-this */

class Component {}

const connect = (a, b) => (c) => {} // eslint-disable-line no-unused-vars

class TestComponent8 extends Component {
  render() {
    return null
  }
}

export default connect(
  () => {},
  {},
)(TestComponent8)
