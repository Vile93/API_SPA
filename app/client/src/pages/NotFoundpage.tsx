import Error from '../components/Error';

const NotFoundpage = () => {
    return (
        <Error
            status="404"
            title="Something's missing."
            descr="Sorry, we can't find that page. You'll find lots to explore on the albums page."
        />
    );
};

export default NotFoundpage;
