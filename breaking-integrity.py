import hashlib
import random


# Simulation de la génération des clés
def generate_keypair():
    private_key = random.randint(1, 1000)
    public_key = hashlib.sha256(str(private_key).encode()).hexdigest()
    return private_key, public_key


# Simulation de la création d'un bulletin
def create_ballot(vote_choice, public_key):
    ballot = {"vote_choice": vote_choice, "public_key": public_key}
    return ballot


# Simulation de la vérification d'un bulletin
def verify_ballot(ballot, election_id, ballot_box_id):
    # Simplification : vérifier si la somme de l'identifiant de l'élection et de l'urne électorale correspond au bulletin
    hash_value = hashlib.sha256((election_id + ballot_box_id).encode()).hexdigest()
    return ballot["public_key"] == hash_value


# Simulation de l'attaque (à des fins pédagogiques uniquement)
def replace_attack(bob_private_key, alice_public_key, election_id, ballot_box_id):
    # Simulation du vote d'Alice
    alice_vote_choice = "Alice's Choice"
    alice_ballot = create_ballot(alice_vote_choice, alice_public_key)

    # Simulation du vote de Bob
    bob_vote_choice = "Bob's Choice"
    bob_ballot = create_ballot(
        bob_vote_choice, alice_public_key
    )  # L'attaquant remplace la clé publique de Bob par celle d'Alice

    # Simulation de la vérification des bulletins
    bob_verification = verify_ballot(bob_ballot, election_id, ballot_box_id)
    alice_verification = verify_ballot(alice_ballot, election_id, ballot_box_id)

    # Affichage des résultats
    print("Bob's Verification:", bob_verification)
    print("Alice's Verification:", alice_verification)


# Simulation de l'attaque
bob_private_key, alice_public_key = generate_keypair()
election_id = "Election123"
ballot_box_id = "BallotBox456"

replace_attack(bob_private_key, alice_public_key, election_id, ballot_box_id)
