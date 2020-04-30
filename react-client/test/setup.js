import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//call Enzyme's configure method and pass an object
Enzyme.configure({adapter: new Adapter() });
//our object has a single property 'adapter' to which we will assign a new enzyme-react-adapter instance.