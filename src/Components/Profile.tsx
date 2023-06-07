import React from 'react';

export const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src={"http://wallpapers-image.ru/1920x1080/flowers/wallpapers/flowers-wallpapers-1920x1080-00025.jpg"}
                    width={'700px'}/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
            Main content
        </div>
    );
};