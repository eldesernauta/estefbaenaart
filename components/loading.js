import { Ping } from '@uiball/loaders'

const Loading = () => (
    <div className="flex justify-center items-center h-screen">
        <Ping
            size={45}
            speed={2}
            color="black"
        />
    </div>
);

export default Loading;