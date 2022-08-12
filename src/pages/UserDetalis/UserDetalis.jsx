import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/context";
import styles from "./UserDetalis.module.css";
import icon from "../../asset/icon/structure.png"
const UserDetalis = () => {
	const { users, } = useContext(UserContext);

   const params = useParams();
   
	const detalisUser = users.find((item) => item.id === +params.id );
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.users}>
					<div className={styles.userBlock}>
						<div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Surname</p>
								<p className={styles.info}>{detalisUser?.name}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Name</p>
								<p className={styles.info}>{detalisUser?.username}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Email</p>
								<p className={styles.info}>{detalisUser?.email}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>City</p>
								<p className={styles.info}>{detalisUser?.address.city}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Street</p>
								<p className={styles.info}>{detalisUser?.address.street}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>House number</p>
								<p className={styles.info}>{detalisUser?.address.suite}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Phone number</p>
								<p className={styles.info}>{detalisUser?.phone}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Company</p>
								<p className={styles.info}>{detalisUser?.company.name}</p>
							</div>
							<div className={styles.blockInfo}>
								<p className={styles.title}>Website</p>
								<p className={styles.info}>{detalisUser?.website}</p>
							</div>
						</div>
						<img
							src={icon}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetalis;
