import random


def gcd(a, b):
    if a < b:
        return gcd(b, a)
    elif a % b == 0:
        return b
    else:
        return gcd(b, a % b)


def mod_exp(base, exponent, modulus):
    result = 1
    base = base % modulus
    while exponent > 0:
        if exponent % 2 == 1:
            result = (result * base) % modulus
        exponent = exponent // 2
        base = (base * base) % modulus
    return result


def generate_key(q):
    key = random.randint(pow(10, 20), q)
    while gcd(q, key) != 1:
        key = random.randint(pow(10, 20), q)
    return key


def encrypt(msg, q, h, g):
    en_msg = []
    k = generate_key(q)  # Private key for sender
    s = mod_exp(h, k, q)
    p = mod_exp(g, k, q)

    for i in range(len(msg)):
        en_msg.append(msg[i])

    print("\nEncryption:")
    print("g^k (mod q) used:", p)
    print("g^ak (mod q) used:", s)
    for i in range(len(en_msg)):
        en_msg[i] = s * ord(en_msg[i])
        print(f"Cipher character {i + 1}: {en_msg[i]}")

    return en_msg, p


def decrypt(en_msg, p, key, q):
    dr_msg = []
    h = mod_exp(p, key, q)
    for i in range(len(en_msg)):
        dr_msg.append(chr(int(en_msg[i] / h)))
    return dr_msg


def main():
    msg = "encryption"
    print("Original Message:", msg)

    q = random.randint(pow(10, 20), pow(10, 50))
    g = random.randint(2, q)

    key = generate_key(q)  # Private key for receiver
    h = mod_exp(g, key, q)
    print("\nReceiver's Information:")
    print("Public key g (mod q) used:", g)
    print("Calculated g^a (mod q):", h)

    en_msg, p = encrypt(msg, q, h, g)
    dr_msg = decrypt(en_msg, p, key, q)
    dmsg = "".join(dr_msg)

    print("\nDecryption:")
    for i in range(len(dr_msg)):
        print(f"Decrypted character {i + 1}: {dr_msg[i]}")

    print("\nDecrypted Message:", dmsg)


if __name__ == "__main__":
    main()
