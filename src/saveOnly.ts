import * as core from "@actions/core";

import saveImpl from "./saveImpl";
import { NullStateProvider } from "./stateProvider";

async function run(): Promise<void> {
    const result = await saveImpl(new NullStateProvider());
    if (!result || result === undefined) {
        core.warning(`Cache save failed.`);
    }
}

run();

export default run;
