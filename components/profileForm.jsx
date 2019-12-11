import styled from 'styled-components';
import '../static/bootstrap.min.css';

const ProfileCard = styled.div`
    /* The Modal (background) */
    & .modal {
        display: ${ props => props.isopenModal ? 'block' : 'block'}; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1000000; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    & .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    /* The Close Button */
    & .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    & .close:hover,
    & .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

const ProfileForm = props => {
    console.log('propsss', props.isopenModal);
    return (
        <ProfileCard>
            <div id="myModal" className="modal" isopenModal = { props.isopenModal }>
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </ProfileCard>
    );
}

export default ProfileForm;