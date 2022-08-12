/* eslint-disable array-callback-return */
import React, {useContext , useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Users.module.css";
import { UserContext } from "../../context/context";
const Users = () => {
   const { users, setUsers } = useContext(UserContext);
   
   const [user, setUser] = useState("");

	const getProduct = (data) => {
		const id = data.id;
		let cart = JSON.parse(localStorage.getItem("cart")) || {};
		cart[id] = { ...data, count: 1 };
		localStorage.setItem("card", JSON.stringify(cart));
	};

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
			.then((data) => setUsers(data));
	}, [setUsers]);
	return (
		<div className={styles.container}>
			<div className={styles.Header}>
				<h1>user information</h1>
				<input
					onChange={(e) => {
						setUser(e.target.value);
					}}
					type="text"
					placeholder="Search"
				/>
			</div>

			<div className={styles.users}>
				{users
					.filter((val) => {
						if (user === "") {
							return val;
						} else if (val.name.toLowerCase().includes(user.toLowerCase())) {
							return val;
						}
					})
					.map((item) => (
						<div className={styles.userBlock} key={item.id}>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Surname</p>
								<p className={styles.info}>{item.name}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Name</p>
								<p className={styles.info}>{item.username}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Email</p>
								<p className={styles.info}>{item.email}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>City</p>
								<p className={styles.info}>{item.address.city}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Street</p>
								<p className={styles.info}>{item.address.street}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>House number</p>
								<p className={styles.info}>{item.address.suite}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Phone number</p>
								<p className={styles.info}>{item.phone}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Company</p>
								<p className={styles.info}>{item.company.name}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Website</p>
								<p className={styles.info}>{item.website}</p>
							</div>
							<Link onClick={() => getProduct(item)} to={`/detalis/${item.id}`}>
								More about the user
							</Link>
						</div>
					))}
			</div>
		</div>
	);
};

export default Users;
