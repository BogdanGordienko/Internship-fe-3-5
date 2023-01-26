import Quiz from '../Quiz';

describe('<Quiz/>', () => {
    let wrapper;

    const props = {
        isShowResults: false,
        isQuizInProcess: true,
        setIsReadyForGame: jest.fn(() => {}),
        isUserReadyToStartQuiz: true,
    };

    beforeEach(() => {
        wrapper = shallow(<Quiz {...props}/>);
    });

    it('snapshot created, should rendered correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Render correctly with snapshot (renderer.create)', () => {
        mountSmart(<Quiz {...props}/>, store);
    });
});
