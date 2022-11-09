import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import clsx from 'clsx';
import Card from './components/Card.jsx';

const App = () => {
    return (
        <div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'}>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hello Selir</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime omnis hic ducimus. Ullam, harum molestias? Sequi minus, nemo
                        ex vel modi, eaque molestias saepe eligendi facere non eos autem consequuntur.
                    </Card.Body>
                    <Card.Footer>
                        <div className={'flex gap-x-2'}>
                            <Button onClick={() => console.log('register')} text='Login' type='submit' />
                            <Button onClick={() => console.log('register')} text={<IconBrandFacebook />} type='submit' />
                            <Button className='bg-sky-600'>
                                <IconBrandTwitter className='w-5 h-5 stroke-1' />
                                Login
                            </Button>
                            <Button
                                {...{
                                    className: 'bg-black',
                                    type: 'submit',
                                    onClick: () => console.log('login with another style'),
                                }}>
                                <IconBrandGithub />
                                Login
                            </Button>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

const Button = (props) => {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button {...props} className={clsx(className, 'flex items-center gap-x-2  text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    );
};

export default App;
