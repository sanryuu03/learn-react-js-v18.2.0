import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'flex gap-x-2'}>
                <Button
                    onClick={() => console.log('register')}
                    text='Login'
                    type='submit'
                />
                <Button
                    onClick={() => console.log('register')}
                    text={<IconBrandFacebook />}
                    type='submit'
                />
                <Button className='bg-sky-600'>
                    <IconBrandTwitter className='w-5 h-5 stroke-1' />
                    Login
                </Button>
                <Button
                    {...{
                        className: 'bg-black',
                        type: 'submit',
                        onClick: () => console.log('login with another style'),
                    }}
                >
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                'flex items-center gap-x-2  text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
