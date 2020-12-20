import Spinner from '../index';

it('mounts without crashing', () => {
  const wrapped = mount(<Spinner />);
  wrapped.unmount();
});
