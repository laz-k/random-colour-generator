const randomColNum = () => Math.floor(Math.random() * 256);

export { randomColNum };

const randomColGen = () => {
	return `rgb(${randomColNum()},${randomColNum()},${randomColNum()})`;
};

export { randomColGen };

const randomColGen2 = num => {
	const boxesArray = Array.from({ length: num });

	return boxesArray.map(() => `rgb(${randomColNum()},${randomColNum()},${randomColNum()})`);
};

export { randomColGen2 };
