# Writeup – _I’ve been getting dirty money, Jordan Belfort_ (cdCTF)

**Category:** Password Cracking
**Points:** 365  
**Flag:** `cdctf{<redacted>}`

---

## Challenge Description

We’re told that Jordan Belfort has been hiding something in an NFT, and that he wants us to crack it in order to skip town. The challenge gives us a Bored Ape NFT image (`APE.jpg`) to work with.

>"Listen, the SEC is on to me for a bunch of insider trading. We gotta stick together, you and I. Gotta make a plan. If I go down, we all go down. I'm pretty sure I hid the keys to a bitcoin wallet in this NFT of mine, or did I hide a flag in there? Who knows, just see if you can get in, I need money to ditch this town! Totally forgot the steg password, but I think it was one of the companies on this years fortune500. Then maybe followed by their listed revenue? Or was it Market Value? Oh yeah, think I left in the dollar sign, for extra security, yk. No spaces though. Maybe the commas in the number? Dang idk this job is too stressful. Hey, are you wearing a wire?"


**Flag format:**

```
cdctf{3x4mPl3_fl4g}
```

Information gathered:
- **We are looking for a steganography password**
- The flag is most likely hidden in the NFT image
- Potential wordlist info:
	- 2025 fortune 500 companies
	- Followed by revenue or market value
	- Commas and dollar signs included
	- No spaces

---

## Step 1: Inspecting the Image

Considering the image is the only file we have been given, it would be a good idea to check and see if there is any obvious information we can gather about it. 

```zsh
$ file APE.jpg
$ exiftool APE.jpg
```

Nothing obvious jumped at me from this, but because Jordan said we were looking for a steg password, I assumed we would be attempting to extract the data with a tool such as `steghide` or `stegseek`. 

---

## Step 2: Building the Wordlist

The challenge hinted the password was **CompanyName + $Revenue/MarketValue**.  
Example format:

```
Apple$391,035
Apple$3,336,853
```

I went looking for a good website that had all of this data for this year's Fortune 500 companies in a format that would be easy to scrape from. Eventually, I found a table with just the data I needed on [eqvista.com](https://eqvista.com/fortune-500-companies-in-the-us/). Using JavaScript in the browser console, I dumped the table without spaces into a text file, then adjusted it with PowerShell scripts (I do cracking on Windows because I'm a freak).

**Original format:**
```txt
ExxonMobil$349,585
ExxonMobil$516,054
...
```

**All Versions:**
1. **Original**
2. **Lowercase** 
3. **Expanded ×1,000,000** (since numbers were in millions)
4. **Lowercase + Expanded**
    
**Lowercase + Expanded**
```txt
exxonmobil$349,585,000,000
exxonmobil$516,054,000,000
...
```

All four versions were merged into one consolidated wordlist: `fortune-500-consolidated.txt`.

---

## Step 3: Brute Forcing with Stegseek

After copying the files into my WSL filesystem, I ran Stegseek on the image using my wordlist.

```bash
stegseek APE.jpg fortune-500-consolidated.txt
```

After a moment, Stegseek cracked it:

```
Found passphrase: "Lowe's$83,674,000,000"
wrote extracted data to "APE.jpg.out"
```

---

## Step 4: Retrieving the Flag

Inside the extracted file (`APE.jpg.out`) we found the flag:


```
cdctf{<redacted>}
```

---

## Takeaways

- Great example of **OSINT-driven stego**.
- Always pay attention to challenge text: hints about Fortune 500, dollar signs, commas, no spaces > all pointed directly to wordlist construction.
- Using **stegseek** instead of steghide makes brute forcing much faster.
- Wordlist manipulation (normal, lowercase, expanded) was key to success.