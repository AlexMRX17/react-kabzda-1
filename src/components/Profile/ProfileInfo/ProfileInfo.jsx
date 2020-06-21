import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (<div>
            <div>

                <img
                    src='https://i0.wp.com/rallisolicitors.co.uk//app/uploads/2016/04/shutterstock_400278007.jpg?resize=2880%2C1000&ssl=1'
                    alt='Text'/>
            </div>
            <div className={s.descriptionBlock}> Welcome to myWorld</div>

        </div>
    );
}
export default ProfileInfo;