export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;

    do {
        let mid = Math.floor(left + (right - left) / 2);
        let value = haystack[mid];

        if (value === needle) return true;
        else if (value < needle) left = mid + 1;
        else right = mid;
    } while (left < right);
    return false;
}
