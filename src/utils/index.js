export const calculatePacks = (order, quantityRequired, packSizes) => {
    const packOrder = order;

    for (let i = 0; i < packSizes.length; i++) {
        const previousPack = packSizes[i === 0 ? 0 : i - 1];
        const currentPack = packSizes[i];
        const nextPack = packSizes[i === packSizes.length - 1 ? 0 : i + 1];
        const lastPack = packSizes[packSizes.length - 1];
        const remainder = quantityRequired - currentPack;

        if (quantityRequired <= currentPack) {
            packOrder.push(currentPack);
            break;
        } else {
            if (nextPack > quantityRequired) {
                if ((previousPack + currentPack) >= nextPack) {
                    packOrder.push(nextPack);
                    break;
                } else {
                    packOrder.push(currentPack);
                    calculatePacks(packOrder, remainder, packSizes);
                    break;
                }
            }

            if (currentPack === lastPack) {
                packOrder.push(currentPack);
                calculatePacks(packOrder, remainder, packSizes);
                break;
            }
        }
    }

    return packOrder;
}

export const accumulatePacks = (packs) => {
    const accumulatedPacks = [];

    packs.forEach(pack => {
        const exists = accumulatedPacks.find(item => item.amount === pack);

        if (exists) {
            exists.quantity = exists.quantity + 1;
        } else {
            accumulatedPacks.push({
                amount: pack,
                quantity: 1
            })
        }
    });

    return accumulatedPacks;
}