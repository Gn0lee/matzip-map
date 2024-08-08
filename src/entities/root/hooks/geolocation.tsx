import { useMap } from 'react-kakao-maps-sdk';
import { useEffect, useState, useRef } from 'react';

const MAX_RETRY_COUNT = 20;
const RETRY_INTERVAL_MS = 500;

export default function Geolocation() {
	const map = useMap();
	const [retryCount, setRetryCount] = useState(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!navigator.geolocation || retryCount >= MAX_RETRY_COUNT) {
			return;
		}

		const handlePositionSuccess: PositionCallback = position => {
			const { coords } = position;
			const { latitude, longitude } = coords;

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			map.setCenter(new kakao.maps.LatLng(latitude, longitude));
		};

		const handlePositionError: PositionErrorCallback = error => {
			console.error(error);

			if (retryCount < MAX_RETRY_COUNT) {
				timeoutRef.current = setTimeout(() => {
					setRetryCount(retryCount + 1);
				}, RETRY_INTERVAL_MS);
			}
		};

		navigator.geolocation.getCurrentPosition(handlePositionSuccess, handlePositionError, {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		});

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [retryCount]);

	return null;
}
