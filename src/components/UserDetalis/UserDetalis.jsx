import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserDetalis.module.css";
const UserDetalis = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				if (response.status === 200) {
					console.log(response);
					return response.json();
				} else {
					console.log("произошла ошибка. Статус ошибки:" + response.status);
				}
			})
			.then((data) => setUser(data));
	}, []);

	const params = useParams();

	const detalisUser = user.find((item) => item.id === +params.id);
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.users}>
					<div className={styles.userBlock}>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Surname</p>
							<p className={styles.info}>{detalisUser.name}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Name</p>
							<p className={styles.info}>{detalisUser.username}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Email</p>
							<p className={styles.info}>{detalisUser.email}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>City</p>
							<p className={styles.info}>{detalisUser.address.city}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Street</p>
							<p className={styles.info}>{detalisUser.address.street}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>House number</p>
							<p className={styles.info}>{detalisUser.address.suite}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Phone numberм</p>
							<p className={styles.info}>{detalisUser.phone}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Company</p>
							<p className={styles.info}>{detalisUser.company.name}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Website</p>
							<p className={styles.info}>{detalisUser.website}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetalis;