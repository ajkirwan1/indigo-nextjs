/** @format */

export default function SortStringDescending(data, field) {
    const sorted = [...data].sort((a, b) => a[field].localeCompare(b[field]));
    return sorted;
}