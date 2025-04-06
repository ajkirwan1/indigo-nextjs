/** @format */

export default function SortStringAscending(data, field) {
    const sorted = [...data].sort((a, b) => b[field].localeCompare(a[field]));
    console.log(sorted);
    return sorted;
}

