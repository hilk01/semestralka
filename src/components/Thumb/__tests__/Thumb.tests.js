import Thumb from '../index';

const src = 'https://bit.ly/2QIKw60';

it('mount without crashing', () => {
  const wrapped = mount(<Thumb src={src} />);
  wrapped.unmount();
});
