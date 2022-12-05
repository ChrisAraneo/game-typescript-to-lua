/* eslint-disable @typescript-eslint/ban-ts-ignore */
love.load = () => {
    const [content] = love.filesystem.read("res/index.txt");
    //@ts-ignore
    print(content);
};

love.draw = () => {
    love.graphics.print("Hello World!", 400, 300);
};
