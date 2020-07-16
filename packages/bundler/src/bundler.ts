import webpack from 'webpack';
import fs from 'fs';
import path from 'path';
import os from 'os';
import {promisify} from 'util';
import execa from 'execa';

const entry = require.resolve('./entry');

const promisified = promisify(webpack);

export const bundle = async (): Promise<string> => {
	const tmpDir = await fs.promises.mkdtemp(
		path.join(os.tmpdir(), 'react-motion-graphics')
	);
	const output = await promisified([
		{
			entry,
			mode: 'development',
			output: {
				filename: 'bundle.js',
				path: tmpDir,
			},
		},
	]);
	if (!output) {
		throw new Error('Expected webpack output');
	}
	const {errors} = output.toJson();
	if (errors.length > 0) {
		throw new Error(errors[0]);
	}
	await execa('cp', [path.join(__dirname, '..', 'web', 'index.html'), tmpDir]);
	return tmpDir;
};