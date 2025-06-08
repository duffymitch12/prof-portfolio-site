import React from 'react';


export default function Form({ clockSettings, onSettingsChange }: {
    clockSettings: { workLimit: string; restLimit: string; intervals: string };
    onSettingsChange: (settings: typeof clockSettings) => void;
}) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        onSettingsChange({
            ...clockSettings,
            [name]: value,
        })
    }

    return (
        <>
            <div>
                <label>
                    Work Time:
                    <input name="workLimit" value={clockSettings.workLimit} onChange={handleChange} />
                </label>
                <label>
                    Rest Time:
                    <input name="restLimit" value={clockSettings.restLimit} onChange={handleChange} />
                </label>
                <label>
                    Amount of Intervals:
                    <input name="intervals" value={clockSettings.intervals} onChange={handleChange} />
                </label>
            </div>
            <div id="settings-preview">
                <p>You will be doing <b>{clockSettings.intervals}</b> set of working for <b>{clockSettings.workLimit}</b> followed by a rest of <b>{clockSettings.restLimit}</b></p>
                <p>This will take <b>{(Number(clockSettings.restLimit) + Number(clockSettings.workLimit)) * Number(clockSettings.intervals)}</b> seconds</p>
            </div>
        </>
    )
};