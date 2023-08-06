import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const UseProtectHook=(props)=>{
    const { authData } = props;
    const router = useRouter();
    if (authData !== null) {
        router.push('/');
    }
    return 'test'
}


const mapStateToProps = (state) => {
    const { authData } = state.authData;
    return { authData }
};

export default connect(mapStateToProps)(UseProtectHook);
