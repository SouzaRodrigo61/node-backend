import convertHoursToMinutes from '../../util/convertHoursToMinutes';

it('shoud be test convert hours to minuntes', () => {
    const minutes = convertHoursToMinutes('08:00');

    expect(minutes).toEqual(480);
});
